import React, {
    Component
} from 'react';
import ColorPicker from '../ColorPicker';
import Reset from '../Reset';
import Result from '../Result';
import SizeSetting from '../SizeSetting';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 12
        }
    }
    onSetColor = (param) => {
        this.setState({
            color: param
        });

    }
    onChangeSize = (param) => {
        if (this.state.fontSize + param >= 8 && this.state.fontSize + param <= 36) {
            this.setState({
                fontSize: this.state.fontSize + param
            });
        }
    }
    onSettingDefault = (param) => {
        if (param) {
            this.setState({
                color: 'red',
                fontSize: 12
            });
        }
    }

    render() {
        return (
            <div className='container mt-50'>
            <h1>Interaction between component</h1>
                <div className='row'>
                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting
                            fontSize={this.state.fontSize}
                            onChangeSize={this.onChangeSize}
                        />
                        <Reset onSettingDefault={this.onSettingDefault} />
                    </div>
                    <Result color={this.state.color} fontSize={this.state.fontSize} />
                </div>
            </div>
        );
    }
}
export default Home;