<template>
  <div class="season">
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm">
          <div class="mt-4 ml-4 mr-4">
            <select class="custom-select" id="filter" v-model="selected">
              <option selected value="1">Season 1</option>
              <option value="2">Season 2</option>
              <option value="3">Season 3</option>
              <option value="4">Season 4</option>
              <option value="5">Season 5</option>
              <option value="6">Season 6</option>
              <option value="7">Season 7</option>
              <option value="8">Season 8</option>
              <option value="9">Season 9</option>
            </select>
          </div>

          <div class="mt-4 ml-4 mb-4">
            <donut-chart :data="filteredMatchData" :labels="labels"></donut-chart>
          </div>
        </div>
        <div class="col-sm">
          <div class="card mt-4 ml-4 mr-4">
            <div class="card-body">
              <h5 class="card-title">MAN OF THE SERIES</h5>
              <p class="card-text">{{topPlayerData.manOfTheMatch}}</p>
            </div>
          </div>

          <div class="card mt-4 ml-4 mr-4">
            <div class="card-body">
              <h5 class="card-tite">ORANGE CAP</h5>
              <p class="card-text">{{topPlayerData.orangeCap}}</p>
            </div>
          </div>
          <div class="card mt-4 ml-4 mr-4 mb-4">
            <div class="card-body">
              <h5 class="card-tite">PURPLE CAP</h5>
              <p class="card-text">{{topPlayerData.purpleCap}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import seasonData from "../assets/api/season.json";
import playersData from "../assets/api/players.json";
import matchData from "../assets/api/matchs.json";
import DonutChart from "./DonutChart";
export default {
  name: "season",
  components: { DonutChart },
  data() {
    return {
      selected: "1",
      matchData: matchData,
      labels: [
        "KKR",
        "RCB",
        "CSK",
        "KXIP",
        "RR",
        "DD",
        "MI",
        "DC",
        "KTK",
        "PW",
        "SH",
        "RPS",
        "GL"
      ]
    };
  },
  computed: {
    filteredMatchData: function() {
      var wins = [];
      //   this.teamList = [];
      //   let season = this.selected;

      for (let i = 1; i <= 13; i++) {
        let count = 0;
        for (var index = 0; index < matchData.length; ++index) {
          // datasets = null;
          var match = matchData[index];
          var seasonId = match.Season_Id;
          if (seasonId == this.selected && match.Match_Winner_Id == i) {
            count++;
          }
        }
        wins.push(count);
      }
      return wins;
    },

    topPlayerData: function() {
      let manOfTheMatchId,
        purpleCapId,
        orangeCapId,
        manOfTheMatch,
        purpleCap,
        orangeCap;

      let count = 0;

      for (var index = 0; index < seasonData.length; ++index) {
        var season = seasonData[index];
        if (season.Season_Id == this.selected) {
          manOfTheMatchId = season.Man_of_the_Series_Id;
          purpleCapId = season.Purple_Cap_Id;
          orangeCapId = season.Orange_Cap_Id;

          for (var i = 0; i < playersData.length; ++i) {
            var players = playersData[i];
            if (players.Player_Id == manOfTheMatchId) {
              manOfTheMatch = players.Player_Name;
              count++;
            }
            if (players.Player_Id == purpleCapId) {
              purpleCap = players.Player_Name;
              count++;
            }
            if (players.Player_Id == orangeCapId) {
              orangeCap = players.Player_Name;
              if (count == 2) {
                break;
              }
            }
          }

          break;
        }
      }
      var playersName = {
        manOfTheMatch: manOfTheMatch,
        purpleCap: purpleCap,
        orangeCap: orangeCap
      };
      return playersName;
    }
  }
};
</script>

<style>
</style>