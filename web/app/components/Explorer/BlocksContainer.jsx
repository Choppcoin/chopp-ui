import React from "react";
import AccountStore from "stores/AccountStore";
import BlockchainStore from "stores/BlockchainStore";
import WitnessStore from "stores/WitnessStore";
import AltContainer from "alt/AltContainer";
import Blocks from "./Blocks";

class BlocksContainer extends React.Component {

    render() {
        return (
              <AltContainer 
                  stores={[AccountStore, BlockchainStore, WitnessStore]}
                  inject={{
                    latestBlocks: () => {
                        return BlockchainStore.getState().latestBlocks;
                    },
                    witnesses: () => {
                        return WitnessStore.getState().witnesses;
                    },
                    witness_id_to_name: () => {
                        return WitnessStore.getState().witness_id_to_name;
                    }
                  }} 
                  >
                <Blocks globalObject={this.props.globalObject} dynGlobalObject={this.props.dynGlobalObject} />
              </AltContainer>
        );
    }
}

export default BlocksContainer;
