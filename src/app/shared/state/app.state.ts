import { State, Action, StateContext, Selector } from "@ngxs/store";
import { SetVisibilityInfo } from "./app.actions";

export interface AppStateModel {
    infoIsVisible: boolean;
}

@State<AppStateModel> ({
    name: 'app',
    defaults: {
        infoIsVisible: true
    }
}) 

export class AppState  {
    @Selector() 
    static getInfoVisibility( state: AppStateModel) {
        return state.infoIsVisible;
    }

    @Action(SetVisibilityInfo) 
     setVisibilityInfo( ctx: StateContext<AppStateModel>, action: SetVisibilityInfo) {
        const state = ctx.getState();
        ctx.setState( {
            ...state,
            infoIsVisible: action.visibility
        });
    }

}