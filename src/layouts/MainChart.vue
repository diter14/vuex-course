<template>
  <div :id="mainChartId"></div>
</template>
<script>
import c3 from "c3";
import { onMounted, onUpdated, toRefs } from "vue";
export default {
  props: ["id", "data"],
  setup(props) {
    const { id, data } = toRefs(props);

    onMounted(() => {
      generateChart();
    });

    onUpdated(() => {
      generateChart();
    });

    const generateChart = () => {
      c3.generate({
        bindto: `#${id.value}`,
        data: data.value,
      });
    };

    return {
      mainChartId: id,
      generateChart,
    };
  },
};
</script>
