import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    updateStatus() {
        this.props.updateStatus(this.props.product.id);
    }

    render () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{String(this.props.product.instock)}</td>
                <td class="text-right"><button onClick={this.updateStatus} class="btn btn-info">Update Status</button></td>
                <td><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
            </tr>
        )
    }
}

export default ProductRow