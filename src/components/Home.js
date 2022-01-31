import React, { Component } from 'react';

import Movies from './Movies';


class Home extends Component {
  queryRef = React.createRef();

  state = {
      queryString: '',
  };

    getFormData = (event) => {
        event.preventDefault();

        this.setState({
            queryString: this.queryRef.current.value
        });
    };


    render() {

        return (

            <div>
                <form className="mt-5" onSubmit={this.getFormData}>
                    <input type="text" className="form-control query-input"
                        name="query" placeholder="Busca una película"
                        ref={this.queryRef}
                    />
                    <button className="btn btn-dark ms-2 query-button" type="submit">&#x1F50D;</button>
                </form>

                <Movies query={this.state.queryString}/>
            </div>

        );
    }
}

export default Home