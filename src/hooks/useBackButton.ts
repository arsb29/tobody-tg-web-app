import {useNavigate} from 'react-router-dom';
import {useTelegram} from './useTelegram';


export const useBackButton = () => {
    const navigate = useNavigate();
    const {BackButton} = useTelegram();
    BackButton.show();
    BackButton.onClick(() => navigate(-1));
};
