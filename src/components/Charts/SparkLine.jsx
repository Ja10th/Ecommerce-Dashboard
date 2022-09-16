import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, currentColor, data, type }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible:true,
        format:'${x}: data ${y}',
        trackLineSettings: {
          visible:true
        }
      }}
      >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
