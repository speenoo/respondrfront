import "./style.css"
import UCEAgencyBlock1 from "./components/use-agency-block1/UCEAgencyBlock1";
import UCEManageEnterPriceReviews from "../UseCasesEnterprice/components/use-casses-enterprice-manage-reviews/UCEManageEnterPriceReviews";
import UCEAgencyInformationBlock from "./components/uce-agency-information-blocks/UseCasesAgencyInformatinBlocks";
import UCAManageReviews from "./components/use-cases-agency-manage-reviews/UCAManageReviews";


export default function UseCasesAgency() {
    return (
        <>
            <div className="useCasesEnterprise_cont d-flex fd-column">
                <UCEAgencyBlock1/>
                <UCAManageReviews/>
                <UCEAgencyInformationBlock/>
            </div>
        </>
    )
}