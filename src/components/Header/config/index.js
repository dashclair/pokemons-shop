import { ROUTE_NAMES } from "../../../routes/routeNames";

export const NAVIGATION_ITEMS = {
    public:[

        {
            title:'Sign Up',
            path: ROUTE_NAMES.SIGN_UP
        },

        {
            title:'Sign In',
            path: ROUTE_NAMES.SIGN_IN
        },
    ],

    private: [
        {
            title: 'My profile',
            path: ROUTE_NAMES.PROFILE
        },

        {
            title: 'Pokemons',
            path: ROUTE_NAMES.POKEMONS
        }
    ]
};

export const publicNavKeys = 'public';
export const privateNavKeys = 'private';