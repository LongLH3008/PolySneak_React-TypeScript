import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from '~/interfaces/I_Products'

const NewProds: React.FC = () => {
    const [newProducts, setNewProducts] = useState<Products[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products`)
                const data = await response.json()
                // const newProds = data.filter((pd: Products) => pd.statusId === 3)
                // setNewProducts(newProds)
                setNewProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className='mt-20 px-48 w-full'>
            <div className='flex justify-start mb-20'>
                <h1 className='text-3xl font-semibold text-zinc-600'>Our News</h1>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {newProducts.map((pro: Products, index) => (
                    <div
                        key={index}
                        className='rounded-md shadow-md border-2 text-zinc-700 hover:border-orange-300 hover:-translate-y-3 cursor-pointer'
                    >
                        <input name={`size_pro_home${pro.id}`} type='hidden' />
                        <input name={`attribute_pro_home${pro.id}`} type='hidden' value={pro.attribute[0]?.id || ''} />
                        <div className='w-full overflow-hidden p-3 border-b'>
                            <Link to={`/detailproduct/${pro.id}`}>
                                <img className='w-full rounded-md' src={pro.attribute[0]?.img || ''} />
                            </Link>
                        </div>
                        <ul className='p-3'>
                            <li className=''>
                                <span className='text-orange-500 font-semibold'>New</span>
                                <p className='font-bold'>{pro.name}</p>
                            </li>
                            <li className='flex justify-between items-end mt-3'>
                                <p>
                                    <span className={`cost ${pro.discount > 0 ? 'line-through text-orange-400' : ''}`}>
                                        {pro.cost?.toLocaleString('en-US') || ''} đ
                                    </span>
                                    <br />
                                    <span>
                                        {pro.discount > 0
                                            ? (((100 - pro.discount) * (pro.cost || 0)) / 100).toLocaleString('en-US') +
                                              ' đ'
                                            : ''}
                                    </span>
                                </p>
                                <button
                                    data-home={pro.id}
                                    id={`home_add_to_cart${pro.id}`}
                                    className='p-2 px-3 rounded-md bg-gradient-to-br hover:from-orange-500 from-zinc-600 to-gray-400 hover:to-amber-300 text-white active:translate-y-1'
                                >
                                    Order
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewProds
