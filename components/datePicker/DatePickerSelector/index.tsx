import { changeDateMonth } from "..";
import styles from "./DatePickerSelector.module.css";
import { Dayjs } from "dayjs";
import ExpandMoreIcon from "../../icons/ExpandMoreIcon";
import cls from "classnames";

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;

  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div className={styles.DatePickerSelector}>
      <div
        className={cls(
          styles.DatePickerSelector__icon,
          styles.DatePickerSelector__iconLeft
        )}
        onClick={handleIconClick(false)}
      >
        <ExpandMoreIcon />
      </div>

      <div className={styles.DatePickerSelector__date}>
        {shownDate.format("MMMM YYYY")}
      </div>

      <div
        className={cls(
          styles.DatePickerSelector__icon,
          styles.DatePickerSelector__iconRight
        )}
        onClick={handleIconClick(true)}
      >
        <ExpandMoreIcon />
      </div>
    </div>
  );
};
