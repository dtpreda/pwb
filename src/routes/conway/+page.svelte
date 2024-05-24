<script lang="ts">
    let svg: SVGSVGElement;
    let cellSize = 50;
    let columns = 30;
    let rows = 15;
    let border = 2;
    let width = columns * cellSize;
    let height = rows * cellSize;

    let cellMargin = 5;
    let cellFillSize = cellSize - cellMargin * 2;

    let cellColor = "#2f8be8"

    let id = Math.random();

    let points = [];

    let paint = false;

    function handleMouseMove(event) {
      if (svg && paint) {
        const { clientX, clientY } = event;
        const { left, top } = svg.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const column = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);
        const point = [column, row];
        points = [...points, point];
      }
    }
</script>

<div class="flex">
  <div class="flex flex-row">
    
  </div>
  <svg
  bind:this={svg}
  viewBox="0 0 {width + border * 2} {height + border * 2}"
  width={width + border * 2}
  height={height + border * 2}
  on:mousemove={handleMouseMove}
  on:mousedown={() => paint = true}
  on:mouseup={() => paint = false}
>
  <defs>
    <pattern
      id="pattern-grid-{id}"
      patternUnits="userSpaceOnUse"
      width={cellSize}
      height={cellSize}
      viewBox="0 0 10 10"
    >
      <rect
        fill="none"
        stroke="currentColor"
        stroke-width="0.1"
        width="10"
        height="10"
      />
    </pattern>
  </defs>

  <g class="grid">
    <rect width={width} height={height} fill="#f7f7f7" transform="translate({border}, {border})" />
    <rect width={width} height={height} fill="url(#pattern-grid-{id})" transform="translate({border}, {border})" />
    <rect width={width + border * 2} height={height + border * 2} fill="none" stroke="#bbbbbb" stroke-width="5" />
  </g>

  <g class="line-points">
    {#each points as point}
      <g transform="translate({point[0] * cellSize + cellMargin + border}, {point[1] * cellSize + cellMargin + border})">
        <rect
          fill={cellColor}
          stroke={cellColor}
          width={cellFillSize}
          height={cellFillSize}
        />
      </g>
    {/each}
  </g>
</svg>
</div>