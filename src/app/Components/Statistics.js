import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStatisticsAsync } from '../../redux/statistics/StatisticsAction'
import { createStructuredSelector } from 'reselect'
import { selectAllStatistics, selectIsStatisticsFetching } from '../../redux/statistics/StatisticsSelector'
import StatisticsItem from './StatisticsItem'
import { Dimmer, Loader } from 'semantic-ui-react'

function Statistics({ fetchStatisticsAsync, statistics, isFeching }) {

    useEffect(() => {
        fetchStatisticsAsync()
    }, [fetchStatisticsAsync])

    if (isFeching) {
        return (
            <div>
                <Dimmer active inverted>
                    <Loader size='massive' />
                </Dimmer>
            </div>
        )
    }

    return (
        <StatisticsItem statistics={statistics} />
    )
}
const mapStateToProps = createStructuredSelector({
    statistics: selectAllStatistics,
    isFeching: selectIsStatisticsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchStatisticsAsync: () => dispatch(fetchStatisticsAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(Statistics)