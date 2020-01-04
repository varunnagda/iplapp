<template>
  <div id="app" class="teams">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="mt-4 ml-4 mr-4">
            <select class="custom-select" id="filter" v-model="selected">
              <option selected value="1">Kolkata Knight Riders</option>
              <option value="2">Royal Challengers Bangalore</option>
              <option value="3">Chennai Super Kings</option>
              <option value="4">Kings XI Punjab</option>
              <option value="5">Rajasthan Royals</option>
              <option value="6">Delhi Daredevils</option>
              <option value="7">Mumbai Indians</option>
              <option value="8">Deccan Chargers</option>
              <option value="9">Kochi Tuskers Kerala</option>
              <option value="10">Pune Warriors</option>
              <option value="11">Sunrisers Hyderabad</option>
              <option value="12">Rising Pune Supergiants</option>
              <option value="13">Gujarat Lions</option>
            </select>
          </div>
          <div class="card mt-4 ml-4 mr-4">
            <div class="card-body">
              <h1 class="card-title">{{teamStats.totalWin}}</h1>
              <p class="card-text">Won</p>
            </div>
          </div>

          <div class="card mt-4 ml-4 mr-4">
            <div class="card-body">
              <h1 class="card-tite">{{teamStats.totalLoss}}</h1>
              <p class="card-text">Lost</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="container">
            <LineChart :data="lineChartDataCollection" :label="label"></LineChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import LineChart from "vue-chartjs";
//import seasonData from "../assets/api/season.json";
import matchData from "../assets/api/matchs.json";
import LineChart from "./LineChart";

export default {
  name: "team",
  components: { LineChart },
  data() {
    return {
      selected: "2",
      matchData: matchData,
      data: [10, 17, 12, 14, 15, 16, 12, 11, 10],
      label: ""
    };
  },

  computed: {
    lineChartDataCollection: function() {
      var teamSeasonStats = [];
      var totalWins;
      var j;
      if (this.selected == 1) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 2) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 3) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 4) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 5) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 6) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 7) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 8) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 9) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 10) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 11) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 12) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }
      if (this.selected == 13) {
        for (j = 1; j < 10; j++) {
          totalWins = calcuateTotalWins(this.selected, j);
          teamSeasonStats.push(totalWins);
        }
      }

      // teamSeasonStats.push(seasonPcount);

      // }

      return teamSeasonStats;
    },
    teamStats: function() {
      let totalWin = 0,
        totalLoss = 0;

      for (var index = 0; index < matchData.length; ++index) {
        var match = matchData[index];

        if (match.Match_Winner_Id == this.selected) {
          ++totalWin;
        } else if (match.Opponent_Team_Id == this.selected) {
          ++totalLoss;
        }
      }

      var team = {
        totalWin: totalWin,
        totalLoss: totalLoss
      };
      return team;
    }
  }
};
function calcuateTotalWins(teamId, seasonId) {
  var seasonPcount = 0;
  for (var k = 0; k < matchData.length; ++k) {
    var matchOfSeason = matchData[k];
    if (
      matchOfSeason.Match_Winner_Id == teamId &&
      matchOfSeason.Season_Id == seasonId
    ) {
      ++seasonPcount;
    }
  }
  return seasonPcount;
}
</script>

<style>
</style>
