import "./Thirsty.css"

function Thirsty() {


    return (
        <div className="container">
            <div className="myStyle">
                <div className="mainBox">
                    <div className="waterStatementDiv">
                        <span className="spanTextAndBox">Your weight of <input className="weightTextBox" id="Weight" size="10" /> kg requires that you drink <input className="waterTextBox" id="Water" size="10" />  glasses of water a day.
                        </span>
                    </div>

                    <div className="">
                        <button className="waterButton">Find your Agua</button>
                    </div>



                </div>

            </div>




        </div>
    )

}

export default Thirsty; 