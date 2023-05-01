
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Bag, PenFill, Search, TrashFill } from 'react-bootstrap-icons'
import AddProduct from './AddProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DeleteProductAsync, GetProductsAsync, getProductAsync, getProductsAsync } from '../../Service/action/product.action'

function Product() {
  const [add, setAdd] = useState(false)

  const { Products, isEdit, totalPrice } = useSelector(state => state.productReducer)

  const handleClick = () => {
    setAdd(!add);
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleIsEdit = (id) => {
    dispatch(getProductAsync(id));

  }

  const [isDelete, setIsDelete] = useState(false)

  const handleDelete = (id) => {

    dispatch(DeleteProductAsync(id))
    setIsDelete(!isDelete)
  }
  const get = () => {
    dispatch(GetProductsAsync())
  }
  useEffect(() => {
    dispatch(getProductsAsync())
    get();
  }, [])

  if (isEdit) {
    navigate('/updateproduct');
  } else {
    return (
      <>
        {
          add === true ? <AddProduct handleClick={handleClick} />
            :
            <>
              <div className='overflow'>
                <div className="search-product mt-4 p-3">
                  <div className="d-flex">
                    <div className="row g-4">
                      <div className="col-auto sa-layout__filters-button">
                        <Button className="btn btn-sa-muted btn-sa-icon fs-exact-16 bg-primary" data-sa-layout-sidebar-open>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2 C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2 C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3 C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z">
                            </path>
                          </svg>
                        </Button>
                      </div>
                      <div className="col">
                        <input type="text" placeholder="Start typing to search for products" className="form-control form-control--search mx-auto" id="table-search" />
                      </div>
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                      <Button onClick={handleClick} className='bg-primary'>Add Product</Button>
                    </div>
                  </div>
                </div>
                <section className="mt-50 mb-50">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table className="table table-bordered shopping-summery text-center">
                            <thead>
                              <tr className="main-heading">
                                <th scope="col">Product</th>
                                <th scope="col">Details</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            {
                              Products.map((pro) => {
                                return (
                                  <>
                                    <tbody className='border-1 col'>
                                      <tr>
                                        <td className="image product-thumbnail col-2">
                                          <img src={pro.img} className='w-75 my-3' alt="" />
                                        </td>
                                        <td className="product-des product-name col-3">
                                          <h5 className="product-name">
                                            <a href="" className='text-decoration-none'>{pro.title}</a>
                                          </h5>
                                          <p className="font-xs">{pro.details}</p>
                                        </td>
                                        <td className="price col-1"><span> &#8377;{pro.price} </span></td>
                                        {/* <td className="price col-1 m-3 p-2">
                                        <a> &#8377;{pro.sprice} </a>
                                      </td> */}
                                        <td className="text-center col-2" >
                                          <span className="color3 font-weight-bold">{pro.stock}</span>
                                        </td>
                                        <td className='col-2'>
                                          <div className='d-flex justify-content-around my-3 '>
                                            <Button className='bg-primary' onClick={() => handleIsEdit(pro.id)}>
                                              <PenFill />
                                            </Button>
                                            ||
                                            <Button className='bg-primary' onClick={() => handleDelete(pro.id)}>
                                              <TrashFill />
                                            </Button>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
                                )
                              })
                            }
                            <thead >
                              <tr className="main-heading">
                                <th scope="col" colSpan={2}>Total</th>
                                <th scope="col" colSpan={1}>{totalPrice}&#8377;</th>
                                {/* <th scope="col" colSpan={1}>{totalPrice}&#8377;</th> */}

                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
        }
      </>
    )
  }
}

export default Product  