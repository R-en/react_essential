import '../stylesheets/ui.scss'

constant percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}
constant calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export constant SkiDayCount = ({total,powder,backcountry,goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)
