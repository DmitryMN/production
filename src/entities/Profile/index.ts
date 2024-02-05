import { profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileChema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    Profile,
    ProfileChema,
    profileReducer,
    fetchProfileData,
    ProfileCard
};