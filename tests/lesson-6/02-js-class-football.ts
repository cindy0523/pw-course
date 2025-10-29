/*
Mô tả: Bạn đang phát triển một ứng dụng quản lý đội bóng. 
Hãy tạo một class để lưu trữ thông tin cầu thủ 
và các phương thức để thao tác với dữ liệu này.
*/

class FootballTeam {
    teamName: string;
    playersName: string[];

    constructor(teamName: string, playersName: string[] = []) {
        this.teamName = teamName;
        this.playersName = playersName;
    };

    addPlayer(newPlayer: string) {
        this.playersName.push(newPlayer);
    };

    playerList() {
        console.log(`Football team is ${this.teamName}`);
        console.log(`Member list: ${this.playersName.join(", ")}`);
    };
};

const footballTeam1 = new FootballTeam("Cute team");

footballTeam1.addPlayer("Thư");
footballTeam1.addPlayer("Su");
footballTeam1.addPlayer("Bon");

footballTeam1.playerList();