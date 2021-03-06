import React, {Component} from 'react'
import '../../components/item/index.css'
class Item extends Component {
    render() {

        let {login,avatar_url,html_url} = this.props
        return (
            <div className="card">
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    <img src={avatar_url} style={{width:'100px'}} alt="avatar"/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}

export default Item