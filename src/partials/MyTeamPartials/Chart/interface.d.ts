interface GoalsData {
    x: string;
    label: string;
    y: number;
}

interface ChartProps {
    goalsList: GoalsData[];
    loading: boolean;
}
