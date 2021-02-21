class GiveStyle{
    constructor(props){
        this.state = {
            color : props.color,
            margin : props.margin
        }
    }

    color(){
        return this.state.color;
    }
}