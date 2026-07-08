const ProfileController = {
    destroy: {
        form: () => ({
            action: '/settings/profile',
            method: 'delete',
        }),
    },
};

export default ProfileController;