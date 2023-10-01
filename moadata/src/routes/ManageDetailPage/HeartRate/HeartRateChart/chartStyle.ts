const COLORS = {
  AREA: 'url(#gradient)',
  AREA_LINE: '#8676ff',
  AXIS: '#383838',
  LABEL: '#8676ff',
  TICK_LABEL: '#b0b0b0',
  VORONOI_LABEL: '#383838',
  CURSOR_LINE: '#cfc8ff',
}

const chartStyle = {
  size: { width: 540, height: 340 },

  theme: {
    area: {
      style: {
        data: { fill: COLORS.AREA, stroke: COLORS.AREA_LINE, strokeWidth: 1.5 },
      },
    },
    axis: {
      style: {
        tickLabels: {
          fill: COLORS.TICK_LABEL,
          padding: 8,
        },
        grid: { stroke: 'none' },
        axis: { stroke: COLORS.AXIS },
      },
    },
    voronoi: {
      style: {
        labels: {
          padding: 15,
          fill: COLORS.VORONOI_LABEL,
          pointerEvents: 'none',
          fontWeight: 'bold',
        },
        flyout: {
          stroke: 'transparent',
          fill: 'transparent',
          pointerEvents: 'none',
        },
      },
    },
  },
}

const labelStyle = {
  position: {
    x: 16,
    y: 18,
  },

  style: {
    fill: COLORS.LABEL,
    fontSize: '18px',
    fontWeight: 'bold',
  },
}

const areaStyle = {
  animation: {
    duration: 2000,
    onLoad: { duration: 1500 },
  },
}

const cursorLineStyle = {
  style: {
    stroke: COLORS.CURSOR_LINE,
    strokeWidth: 2,
    strokeDasharray: '10 5',
  },
}

export { chartStyle, labelStyle, areaStyle, cursorLineStyle }
