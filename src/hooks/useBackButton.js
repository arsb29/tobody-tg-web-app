import {useTelegram} from "./useTelegram";
import {useNavigate} from "react-router-dom";

export const useBackButton = () => {
    const navigate = useNavigate();
    const {BackButton} = useTelegram();
    BackButton.show();
    BackButton.onClick(() => navigate(-1));
};
