<template>
  <el-form>
    <el-form-item label="选择经度字段" label-width="120px">
      <el-select v-model="selectedLon" filterable placeholder="请选择">
        <el-option
          v-for="item in lonColumns"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择纬度字段" label-width="120px">
      <el-select v-model="selectedLat" filterable placeholder="请选择">
        <el-option
          v-for="item in latColumns"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择文本字段" label-width="120px">
      <el-select v-model="selectedLabel" filterable placeholder="请选择">
        <el-option
          v-for="item in latColumns"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import Util from '@/util.js'
export default {
  props: ['tableColumns'],
  data() {
    return {
      selectedLon: null,
      selectedLat: null,
      selectedLabel: null,
      lonColumns: null,
      latColumns: null,
    }
  },
  watch: {
    tableColumns: {
      handler() {
        let columns = []
        this.tableColumns.forEach((val, idx) => {
          let column = {
            label: val,
            value: val,
          }
          if (Util.isLongitude(val)) {
            this.selectedLon = val
          }
          if (Util.isLatitude(val)) {
            this.selectedLat = val
          }
          if (idx === 0) {
            this.selectedLabel = val
          }
          columns.push(column)
        })
        this.lonColumns = columns
        this.latColumns = columns
      },
      immediate: true,
    },
  },
}
</script>

<style>
.el-form-item {
  width: 100%;
}
</style>
