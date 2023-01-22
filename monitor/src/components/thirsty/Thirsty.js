import "./Thirsty.css"
import image from "../login/img/thirsty.jpg"

function Thirsty() {


    return (
        <div className="container">
            <div className="myStyle">
                <div className="mainBox">
                    <div nameclass="waterStatementDiv">
                        <div>Your weight of </div><input nameclass="weightTextBox" id="Weight" size="10" />kg requires that you drink <input nameclass="waterTextBox" id="Water" size="10" /> glasses of water a day.
                    </div>

                    <button nameClass="waterButton">Find your Agua</button>




                </div>

            </div>




        </div>
    )

}

export default Thirsty; 