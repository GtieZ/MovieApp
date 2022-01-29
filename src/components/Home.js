import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  queryRef = React.createRef();

  state = {
      queryString: '',
      redirect: false
  };

    getFormData = (event) => {
        event.preventDefault();
        this.setState({
            queryString: this.queryRef.current.value,
            redirect: true
        });
    };

    render() {

        if(this.state.redirect){
            return(
                <Redirect to={'/movie/'+this.state.queryString} />
            );
        }



        return (

            <div>

                <h1>HOME</h1>

                <form onSubmit={this.getFormData}>
                    <input type="text" className=""
                        name="query" placeholder="Busque una película"
                        ref={this.queryRef}
                    />

                    <button type="submit">Ok</button>
                </form>





             






            </div>

        );
    }
}

export default Home