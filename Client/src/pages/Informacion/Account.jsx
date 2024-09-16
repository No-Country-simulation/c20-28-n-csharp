import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer } from "../../Components/Targets/TargetTransf";
import { Header } from "../../Components/Header/Header";

function Account() {
     return (
          <div className="container-fluid">
               <div className="row">
                    <div className="aside col-2">
                         <SideBar />
                    </div>
                    <div className="col-10 px-5">
                         <div className="row">
                              <Header
                                   tituloPagina="Cuenta"
                              />
                         </div>
                         <div className="row me-5 px-5">
                              <div className="col-5">                         
                              <InfoAccount />
                              </div>  
                              <div className="col-7">
                              <AccountMoves />
                              </div> 
                         </div>
                    </div>
               </div>
          </div >


     );
}
export default Account;