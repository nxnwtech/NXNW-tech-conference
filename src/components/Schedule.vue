<template>
  <div>
    <div>
      <div>
        <div class="schedule-track-name text-center text-gray-600 font-semibold">{{schedule.name}}</div>
        <table>
          <thead>
            <tr class="table-head__row">
              <td>Talk</td>
              <td>Time</td>
              <td>Duration</td>
              <td>Venue</td>
            </tr>
          </thead>
          <tbody>
            <tr class="shadow--large table-body__row" v-for="item in schedule.Item" :key="item.id">
              <td>{{item.talk}}</td>
              <td>{{item.time}}</td>
              <td>{{item.duration}}</td>
              <td>{{item.venue}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["schedule"]
};
</script>

<style lang="scss">
table {
  border-collapse:separate;
  border-spacing:0 5px;
  width: 100%;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    // schedule
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

.table-head__row {
  background: #0e153a;
  color: #fff;
}
.table-body__row {
  background: #fff;
  color: #0e153a;
}

.schedule-track-name  {
  font-size: 1.3em;
}
</style>