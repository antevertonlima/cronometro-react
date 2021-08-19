import React, {Component} from 'react';
import temporizador from './assets/cronometro.png';
import './style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            txtBtn: 'VAI'
        };

        this.timer = null;

        this.vai = this.vai.bind(this);            
        this.limpar = this.limpar.bind(this);       
    }

    vai(){
        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.txtBtn = 'VAI';
        }else{
            this.timer = setInterval(()=>{                
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            },100)
            state.txtBtn = 'PAUSAR';
        }
        this.setState(state);
    }

    limpar(){
        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        state.numero = 0;
        state.txtBtn = 'VAI';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={temporizador} className="img" />
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao"onClick={this.vai}>{this.state.txtBtn}</a>
                    <a className="botao"onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default App;