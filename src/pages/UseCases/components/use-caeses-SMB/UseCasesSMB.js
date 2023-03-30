import "./style.css"
import UCESMBBlock1 from "./components/use-cases-SMB-block1/UCASMBBlock1";
import UCEManageEnterPriceReviews from "../UseCasesEnterprice/components/use-casses-enterprice-manage-reviews/UCEManageEnterPriceReviews";
import UCASMBBlock1 from "./components/use-cases-SMB-block1/UCASMBBlock1";
import UCASMBInformationBlock from "./components/uca-SMB-Information-block/UCASMBInformationBlock";
import UCSMBManageReviews from "./components/us-SMB-manage-reviews/USSMBManageReviews";



export default function UsaCasesSMB() {
    return (
        <>
            <div className="useCasesEnterprise_cont d-flex fd-column">
                <UCASMBBlock1/>
                <UCSMBManageReviews/>
                <UCASMBInformationBlock/>
            </div>
        </>
    )
}