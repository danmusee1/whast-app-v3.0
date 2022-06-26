import {Circle} from "better-react-spinkit";

function Loading(){
    return(
        <center style={{display:"grid", placeItems:"center", height:'100vh', background:"#0a1014"}}>
            <div>
                <img 
src="https://imgs.search.brave.com/YNAt8hFIqpogTCotf09O-Lnn-1Lu_i2EVs6h_T6PqcA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZnJl/di5uZXQvd3AtY29u/dGVudC9waG90b3Mv/MjAxNi8wNi93aGF0/c0FwcC1sb2dvLTEu/cG5n" 
                alt=""
                style={{marginBottom:10}}
                height={100}
                />
                <Circle color="#3CBC28" size={60} />
                
            </div>
        </center>
    )
}
export default Loading;

