import React, { useState } from 'react'
import { Button, Container, Form, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { CreateProductAsync } from '../../Service/action/product.action';

function AddProduct({ handleClick }) {
    const [product, setProduct] = useState({
        img: "",
        title: "",
        details: "",
        price: "",
        stock: ""
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...product, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(CreateProductAsync(product))
        handleClick();
        setProduct({
            img: "",
            title: "",
            details: "",
            price: "",
            sprice: "",
            stock: ""
        })
    }


    return (
        <>
            <div className='form-wrapper d-flex mt-4'>
                <Container className='wrapper'>
                    <Card className='p-4 border-dark'>

                        <h1>
                            Create Product :-
                        </h1>

                        <Form onSubmit={(e) => { handleSubmit(e) }}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Image</Form.Label>
                                <Form.Control placeholder="Add Image Url" name='img' value={product.img} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder=" Enter Price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                <Form.Label>Sale Price</Form.Label>
                                <Form.Control type="text" placeholder=" Enter Sell Price" name='sprice' value={product.sprice} onChange={(e) => { handleChange(e) }} />
                            </Form.Group> */}
                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="text" placeholder="Enter Stock" name='stock' value={product.stock} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            <div className='d-flex justify-content-start'>
                                <Button className='bg-primary' type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default AddProduct