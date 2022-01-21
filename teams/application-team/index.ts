import { ArnPrincipal } from '@aws-cdk/aws-iam';
import { ApplicationTeam } from '@aws-quickstart/ssp-amazon-eks';


export class TeamApplication extends ApplicationTeam {
    constructor(name: string) {
        super({
            name: name,
            users: [
                new ArnPrincipal(`arn:aws:iam::083327272358:role/team-burnham-role-c8dea560`),  
            ],
        });
    }
}