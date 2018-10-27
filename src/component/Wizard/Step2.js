import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateImg } from "../../ducks/reducer";

class Step2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: '',

        }

    }

    handleImgUrlChange = (e) => {
        this.setState({ img: e.target.value })
    }

    handleNextStep = () => {
        this.props.updateImg(this.state.img)
        this.props.history.push("/wizard/step3")
    }

    handlePreviousStep = () => {
        this.props.history.push("/wizard/step1")
    }

    render() {
        return (
            <div>
                <p>Image URL</p>
                <input onChange={this.handleImgUrlChange}></input>

                <button onClick={this.handlePreviousStep}>Previous Step</button>


                <button onClick={this.handleNextStep}>Next Step</button>

            </div>
        )
    }

}

function mapStateToProps(state) {
    const { img } = state
    return {
        img
    }
}

export default connect(mapStateToProps, { updateImg })(Step2)