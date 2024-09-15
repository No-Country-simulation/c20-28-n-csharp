import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer } from "../../Components/Targets/TargetTransf";

function Account() {
     return (
          <div className="row">
               <aside className="col-2">
                    <SideBar />
               </aside>
               <section className="col-3 ">
                    <InfoAccount />
               </section>
               <section className="col-6 pe-5">
                    <AccountMoves />
               </section>
          </div>


     );
}
export default Account;