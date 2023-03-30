import "./style.css"
import UCEStrategySession from "./components/use-cases-enterprice_strategy_session/UCEStrategySession";
import UCEManageEnterPriceReviews from "./components/use-casses-enterprice-manage-reviews/UCEManageEnterPriceReviews";
import UCEInformationBlock from "./components/use-cases-enterprice-information-block/UCEInformationBlock";

export default function UseCasesEnterPrice() {
    return (
        <>
                <div className="useCasesEnterprise_cont d-flex fd-column">
                    <UCEStrategySession/>
                    <UCEManageEnterPriceReviews/>
                    <UCEInformationBlock/>
                </div>
    </>
    )
}