import InfoAccount from "../../Components/InfoAccount";
import AccountMoves from "../../Components/AccountMoves";

function Account(){
        return(
        <div className="row">
           <section className="col-4">
                <InfoAccount/>
           </section>
           <section className="col-7">
                <AccountMoves/>
           </section>
        </div>  
        );
}
export default Account;