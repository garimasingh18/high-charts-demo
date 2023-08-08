import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="dispaly-flex home">
        <a href="/bubble">
          <div>
            <img src="/images/bubble.jpg" alt="image" />
            Packed bubble chart
            <p>
              Packed bubble charts are visualizations where the size and
              optionally the color of the bubbles are used to visualize the
              data. The positioning of the bubbles is not significant, but is
              optimized for compactness. Try dragging the bubbles in this chart
              around, and see the effects.
            </p>
          </div>
        </a>
        <a href="/line">
          <div>
            <img src="/images/line.jpg" alt="image" />
            Basic line
            <p>
              Basic line chart showing trends in a dataset. This chart includes
              the series-label module, which adds a label to each line for
              enhanced readability.
            </p>
          </div>
        </a>
        <a href="/pie">
          <div>
            <img src="/images/pie.jpg" alt="image" />
            Pie chart
            <p>
              Pie charts are very popular for showing a compact overview of a
              composition or comparison. While they can be harder to read than
              column charts, they remain a popular choice for small datasets.
            </p>
          </div>
        </a>
        <a href="/map">
          <div>
            <img src="/images/map.jpg" alt="image" />
            Map Chart
            <p>
              This demo shows how plot bands can be used on an axis to highlight
              regions of a chart. In this example, the plot bands are used to
              separate the wind speeds on the Y-axis into categories.
            </p>
          </div>
        </a>
        <a href="spline">
          <div>
            <img src="/images/spline.jpg" alt="image" />
            Spline with plot bands
            <p>
              This demo shows how plot bands can be used on an axis to highlight
              regions of a chart. In this example, the plot bands are used to
              separate the wind speeds on the Y-axis into categories.
            </p>
          </div>
        </a>
      </section>
    </>
  );
}

export default Home;
