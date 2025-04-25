import { $availableRoutes } from "~/configs/routes.config";

export async function updateAssistantHistory(c_key: string | null) {
    if(c_key){
        await useAssistant().updateUserAssistantKeys();
        const target = useAssistant().getUserAssistantKeys.find(item => item.c_key === c_key);
        
        if(target) {
            return await useAssistant().updateAssistantKeyHistoryById(target.id);        
        }
    }
    useRouter().push($availableRoutes.home);
}