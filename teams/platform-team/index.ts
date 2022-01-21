import { ArnPrincipal } from "@aws-cdk/aws-iam";
import { PlatformTeam } from '@aws-quickstart/ssp-amazon-eks';

export class TeamPlatform extends PlatformTeam {
    constructor(accountID: string) {
        super({
            name: "platform",
            users: [new ArnPrincipal(`arn:aws:iam::083327272358:role/platform-team-role-c8dea560`)]
        })
    }
}