const Title = () =>{
    return(
        <div className="name">
            <h1>Pomodoro Clock</h1>
        </div>
    )
}


class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Time: '25:00',
            BreakLength: 5,
            SessionLength: 25,
            Timer: null,
            Playing: false,
            Phase: 'Session',
            IntervalTimer: null,
            OkayToCreateTimer: true,
            Beep: null
        }
    }

    reset = () =>{
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        clearInterval(this.state.Timer);
        this.setState({
            Time: '25:00',
            BreakLength: 5,
            SessionLength: 25,
            Timer: null,
            Playing: false,
            Phase: 'Session',
            IntervalTimer: null,
            OkayToCreateTimer: true,
        })
    }

    TimerCreater = () =>{
        this.setState({IntervalTimer: Number(this.state.Time.substring(0,2)) * 60});
        return setInterval(() =>{
            if(this.state.Playing){
                let minutes = parseInt(this.state.IntervalTimer / 60,10);
                let seconds = parseInt(this.state.IntervalTimer % 60, 10);
                this.setState({
                    Minutes: minutes,
                    Seconds: seconds
                });
                if(minutes + seconds >= 0){
                    this.setState({IntervalTimer: this.state.IntervalTimer - 1});
                    this.setState({Time: `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`});
                }else{
                    document.getElementById('beep').play();
                    if(this.state.Phase === 'Session'){
                        this.setState({Phase: 'Break'});
                        let Break = this.state.BreakLength;
                        this.setState({Time: `${Break < 10 ? '0'+ Break : Break}:00`});
                        this.setState({IntervalTimer: this.state.BreakLength * 60});
                    }else{
                        this.setState({Phase: 'Session'});
                        let Session = this.state.SessionLength;
                        this.setState({Time: `${Session < 10 ? '0'+ Session : Session}:00`});
                        this.setState({IntervalTimer: this.state.SessionLength * 60});
                    }
                }
            }
        },1000);
    }

    Play = () =>{
        if(!this.state.Playing){
            this.setState({Playing: true});
            if(this.state.OkayToCreateTimer) this.setState({Timer: this.TimerCreater()});
        }else{
            this.setState({Timer: null})
            this.setState({Playing: false});
        }
    }

    BreakIncrement = () =>{
        if(this.state.BreakLength < 60){
            this.setState({BreakLength: this.state.BreakLength + 1});
        }
    }
    BreakDecrement = () =>{
        if(this.state.BreakLength > 1){
            this.setState({BreakLength: this.state.BreakLength - 1});
        }
    }
    SessionIncrement = () =>{
        if(this.state.SessionLength < 60){
            this.setState({SessionLength: this.state.SessionLength + 1});
            let SLength = this.state.SessionLength + 1;
            this.setState({Time: `${SLength < 10 ? '0' + SLength : SLength}:00`});
        }
    }
    SessionDecrement = () =>{
        if(this.state.SessionLength > 1){
            this.setState({SessionLength: this.state.SessionLength - 1});
            let SLength = this.state.SessionLength - 1;
            this.setState({Time: `${SLength < 10 ? '0' + SLength : SLength}:00`});
        }
    }


    render(){
        return(
            <div className="sections">
                <Title />
                <div className="buttons">
                    <div id="break-label">
                        <h1>Break Time</h1>
                        <div className="arrows">
                            <button id="break-increment" onClick={this.BreakIncrement}><i className="fas fa-arrow-up fa-2x"></i></button>
                                <h3 id="break-length">{this.state.BreakLength}</h3>
                            <button id="break-decrement" onClick={this.BreakDecrement}><i className="fas fa-arrow-down fa-2x"></i></button>
                        </div>
                    </div>

                    <div id="session-label">
                        <h1>Session Time</h1>
                        <div className="arrows">
                            <button id="session-increment" onClick={this.SessionIncrement}><i className="fas fa-arrow-up fa-2x"></i></button>
                                <h3 id="session-length">{this.state.SessionLength}</h3>
                            <button id="session-decrement" onClick={this.SessionDecrement}><i className="fas fa-arrow-down fa-2x"></i></button>
                        </div>
                    </div>
                </div>
                <div id="timer-label">{this.state.Phase}</div>
                <div className="time">
                    <h1 id="time-left">{this.state.Time}</h1>
                </div>
                <div id="controls">
                    <button id="start_stop" onClick={this.Play}><i className="fas fa-play"><i className="fas fa-pause"></i></i></button>
                    <button id="reset" onClick={this.reset}><i className="fas fa-redo"></i></button>
                </div>
                <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={(audio) =>{

                }}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));