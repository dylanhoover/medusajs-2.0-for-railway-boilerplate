import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { linkProductToStoreStep } from "./steps/link-product-to-store";
import { getStoreStep } from "./steps/get-store";

export type LinkProductToStoreInput = {
    product_id: string;
    user_id: string;
};

export const linkProductToStoreWorkflow = createWorkflow(
    "link-product-to-store",
    (input: LinkProductToStoreInput) => {

        const { store } = getStoreStep(input.user_id);
        
        const productStoreLinkArray = linkProductToStoreStep({
                productId: input.product_id,
                storeId: store.id,
        });

        return new WorkflowResponse({
            productStoreLinkArray,
            store,
        });
    }
)
