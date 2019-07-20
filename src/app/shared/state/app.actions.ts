
export class SetVisibilityInfo {
    static readonly type = '[app] Set Visibility';
    
    constructor(public visibility: boolean ){ 
        console.log(`Setting visibility to ${visibility}`);   
    }
}