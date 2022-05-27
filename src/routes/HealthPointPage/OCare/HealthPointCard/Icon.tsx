import {
  ResBloodPressureIcon,
  ResBMIIcon,
  DrnkQtyIcon,
  ResGFRIcon,
  ResTotalCholesterolIcon,
  SmkQtyIcon,
  ResFastingBloodSugerIcon,
  ExerciQtyIcon,
} from 'assets/svgs'

interface IProps {
  dataKey: string
}

const Icon = ({ dataKey }: IProps) => {
  const targetIcon = {
    resBloodPressure: <ResBloodPressureIcon />,
    resBMI: <ResBMIIcon />,
    drnkQty: <DrnkQtyIcon />,
    resGFR: <ResGFRIcon />,
    resTotalCholesterol: <ResTotalCholesterolIcon />,
    smkQty: <SmkQtyIcon />,
    resFastingBloodSuger: <ResFastingBloodSugerIcon />,
    exerciQty: <ExerciQtyIcon />,
  }[dataKey] ?? <ResBMIIcon />

  return targetIcon
}

export default Icon
