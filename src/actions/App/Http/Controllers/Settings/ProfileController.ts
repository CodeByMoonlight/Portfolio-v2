const ProfileController = {
    destroy: {
        form: () => ({
            action: '/settings/profile',
            method: 'delete' as const,
        }),
    },
};

export default ProfileController;