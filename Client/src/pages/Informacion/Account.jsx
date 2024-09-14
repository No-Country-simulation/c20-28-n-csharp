import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import {BtnSearch, CardContactos, Target} from "../../Components/Targets/TargetTransf";

function Account(){
        return(
        <div className="row px-5">
           <section className="col-4 ps-5 ms-5">
                <InfoAccount/>
           </section>
           <section className="col-7 pe-5">
                <AccountMoves/>      
           </section>
        </div> 
     
     
        );
}
export default Account;