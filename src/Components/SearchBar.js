import React from 'react';


class SearchBar extends React.Component  {
    state={text:''}
    onSubmitForm=(event)=>{
        event.preventDefault();
        //TODO: make sure we call
        //callback from parent component
       this.props.onSubmitProphaha(this.state.text);
    }
    render(){
        return (
            <div className=" search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text"
                        value={this.state.text}
                        onChange={(event)=>this.setState({text:event.target.value})}
                        
                        ></input>
                    </div>
                </form>
            </div>
    
        )
    }
}

export default SearchBar;