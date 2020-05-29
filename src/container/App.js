import React, {Component} from 'react';
import {moviesList } from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import DisplayList from '../component/displaylist';

class App extends Component{
    //Calling action
    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayList datalist={this.props.mydata}/>
            </div>
        )
    }
}

//help to recive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }

}

//help to dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);