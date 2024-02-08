import { profileReducer, profileActions } from './model/slice/profileSlice';
import { Profile, ProfileChema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';

export {
    Profile,
    ProfileChema,
    profileReducer,
    profileActions,
    fetchProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadonly,
    getProfileForm,
};